"use client";
import { NoRampOneClick } from "norampkit";

export default function Page() {
  return (
    <>
      <main>
        <div className="text-3xl font-bold text-center mt-8">
          <h1>M.L.K DRIVE LNE - ATL5D</h1>
          <div className="flex justify-center p-12">
            <NoRampOneClick
              priceId="price_0cmL3s1FESwuav5AnoI0a1" // Create price in your dashboard or using our API
            />
          </div>
        </div>
      </main>
    </>
  );
}
