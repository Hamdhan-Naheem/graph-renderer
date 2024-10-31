"use client";

import Button from "@/components/button";
import Error from "@/components/error";
import Input from "@/components/input";
import Watermark from "@/components/watermark";
import { redirectToDashboard } from "./actions";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="bg-teal-100 flex flex-col h-screen">
      <Watermark />
      {error && <Error message={error} />}
      {/* // CODE FOR TASK 2.2 ----------------------------------------- */}
      <section className="flex-1 flex items-center justify-center p-4 z-10">
        <div>
          <p className="animate-pulse bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300 bg-clip-text text-transparent text-3xl">
            Welcome to
          </p>
          <p className="animate-pulse bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300 bg-clip-text text-transparent text-6xl font-bold mt-2">
            Graph Renderer.
          </p>
          <form
            action={async (formData) => {
              const error = await redirectToDashboard(formData);
              if (error) {
                setError(error);
              }
            }}
          >
            <div className="mt-8 border-2 p-5 bg-slate-50 border-gray-300">
              <label htmlFor="name" className="block mb-2 text-gray-600">
                What's your name?
              </label>
              <div className="flex gap-2 [&_*:focus]:outline-none [&_*:focus]:ring-2 [&_*:focus]:ring-black [&_*:focus]:border-transparent">
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g. John Appleseed"
                />
                <Button type="submit" theme="primary">
                  Continue
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* // END OF CODE FOR TASK 2.2 ---------------------------------- */}
    </main>
  );
}
