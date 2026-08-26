import { Clerk } from '@clerk/clerk-js';

// 1. Initialize Clerk using your .env.local variable
const pubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(pubKey);

async function setupClerk() {
  await clerk.load();

  // Grab the forms and inputs from the DOM
  const step1Form = document.getElementById('step-1-email');
  const step2Form = document.getElementById('step-2-otp');
  const step3Form = document.getElementById('step-3-details');
  const emailInput = document.getElementById('clerk-email');
  const otpInput = document.getElementById('clerk-otp');

  // --- NEW CHECK: IS THE USER ALREADY VERIFIED? ---
  if (clerk.user) {
    // If they already have an active session, skip straight to the final form!
    // We also populate the hidden email input so your backend still gets it.
    emailInput.value = clerk.user.primaryEmailAddress.emailAddress;
    
    step1Form.style.display = 'none';
    step2Form.style.display = 'none';
    step3Form.style.display = 'block';
  }

  // STEP 1: Capture Email and Send Code
  step1Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      await clerk.client.signUp.create({ emailAddress: emailInput.value });
      await clerk.client.signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      
      // Hide Step 1, Show Step 2
      step1Form.style.display = 'none';
      step2Form.style.display = 'block';
    } catch (err) {
      console.error("Error sending code:", err.errors?.[0]?.longMessage || err);
      alert(err.errors?.[0]?.longMessage || "An error occurred.");
    }
  });

  // STEP 2: Verify the OTP Code
  step2Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const completeSignUp = await clerk.client.signUp.attemptEmailAddressVerification({ 
        code: otpInput.value 
      });
      
      if (completeSignUp.status === 'complete') {
        // Verification passed! Set session active
        await clerk.setActive({ session: completeSignUp.createdSessionId });
        
        // Hide Step 2, Show Step 3
        step2Form.style.display = 'none';
        step3Form.style.display = 'block';
      }
    } catch (err) {
      console.error("Invalid code:", err.errors?.[0]?.longMessage || err);
      alert("Invalid verification code. Please try again.");
    }
  });

  // STEP 3: Submit the Final Lead Data
  step3Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Package up exactly what api/contact.js expects
    const leadData = {
      name: document.getElementById('lead-name').value,
      email: emailInput.value,
      type: document.getElementById('lead-type').value,
      budget: document.getElementById('lead-budget').value,
      challenge: document.getElementById('lead-challenge').value
    };
    
  ///  console.log("Submitting verified lead:", leadData);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); 
        // Optional: Sign the user out here if you want them to re-verify next time
        // await clerk.signOut(); 
        
      } else {
        alert(result.error); 
      }
    } catch (error) {
      console.error('Submission failed:', error);
      alert('We could not send that just now — please try again shortly.');
    }
  });
}

// Run the setup
setupClerk();