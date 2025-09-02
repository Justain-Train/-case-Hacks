export enum ButtonStates {
  DEFAULT = "default",
  SUBMITTING = "submitting",
  SUBMITTED = "submitted",
  ERROR = "error",
  INVALID = "invalid",
  EMPTY = "empty",
  DUPLICATE = "duplicate"
}


export const validateEmail = (email: string): boolean => {
  const emailPrefix = "[A-Z0-9._%+-]+";
  const emailServer = "([A-Z0-9-]+\\.)+";
  const emailRegEx = `^${emailPrefix}@${emailServer}[A-Z]{2,6}$`;
  const regex = new RegExp(emailRegEx, "i"); 

  return regex.test(email);
};


export const getResultMessage = (state: ButtonStates): string => {
  switch (state) {
    case ButtonStates.SUBMITTED:
      return "Thanks for signing up to our mailing list!";
    case ButtonStates.INVALID:
      return "Please enter a valid email address.";
    case ButtonStates.DUPLICATE:
      return "This email address is already subscribed.";
    case ButtonStates.EMPTY:
      return "Please fill in all required fields.";
    default:
      return "An error occurred. Please try again.";
  }
};


export const signUpForMailingList = async (email: string): Promise<ButtonStates> => {

  try {
    const res = await fetch("https://sloblfvvplbhbgumvpyy.supabase.co/functions/v1/join-waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      if (data.isDuplicate) {
        return ButtonStates.DUPLICATE;
      }
      return ButtonStates.SUBMITTED;
    } else {
      return ButtonStates.ERROR;
    }
  } catch (err) {
    console.error("Error during signup:", err);
    return ButtonStates.ERROR;
  }
};


