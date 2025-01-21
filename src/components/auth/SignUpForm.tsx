import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../hooks/useAuth";
import { isEmailRegistered } from "../../utils/authValidation";
import Input from "../ui/Input";
import Button from "../ui/Button";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // First check if email exists in user_profiles
      const { exists, message } = await isEmailRegistered(email);

      if (exists) {
        setError(message);
        setLoading(false);
        return;
      }

      // If email not in user_profiles, try to sign up
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/email-confirmation`,
          data: {
            email_confirmed: false,
          },
        },
      });

      if (signUpError) {
        if (
          signUpError.message.includes("already registered") ||
          signUpError.message.includes("already taken")
        ) {
          setError("This email is already registered. Please sign in instead.");
          setLoading(false);
          return;
        } else {
          setError(signUpError.message);
          setLoading(false);
          return;
        }
      }

      if (data.user) {
        setUser(data.user);
        navigate("/check-email");
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Sign up error:", err);
      setError("An error occurred during sign up");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div>
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          disabled={loading}
        />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
          {error.includes("already registered") && (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="ml-2 underline hover:no-underline"
            >
              Sign in
            </button>
          )}
        </div>
      )}
      <Button
        type="submit"
        disabled={loading || !!error}
        className="w-full bg-black text-white py-3 hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        showArrow={false}
      >
        {loading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default SignUpForm;
