// components/DonateModal.tsx
"use client";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";
import { useState } from "react";

type Props = {
    onClose: () => void;
};

export default function DonateModal({ onClose }: Props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        amount: "",
        currency: "USD",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const paymentConfig = {
        public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
        tx_ref: Date.now().toString(),
        amount: Number(form.amount),
        currency: form.currency,
        payment_options: "card,banktransfer,ussd",
        customer: {
            email: form.email,
            name: form.name,
            phone_number: ''
        },
        customizations: {
            title: "Donation",
            description: "Thank you for your generosity!",
            logo: "/logo.png",
        },
        callback: (response: FlutterWaveResponse) => {
            console.log("Payment complete:", response);
            closePaymentModal();
            onClose();
            // Optional: verify on server
        },
        onClose: () => {
            console.log("Modal closed");
        },
    };

    const initiatePayment = useFlutterwave(paymentConfig);
    return (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        initiatePayment({
                            callback: (response) => {
                                console.log("Payment complete:", response);
                                closePaymentModal();
                                onClose();
                            },
                            onClose: () => {
                                console.log("Payment modal closed");
                            },
                        });
                    }}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        required
                        min={1}
                        step={0.01}
                        value={form.amount}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />

                    <select
                        name="currency"
                        value={form.currency}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>

                    <div className="flex gap-4 justify-between mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 w-1/2 bg-gray-300 rounded cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 w-1/2 py-2 bg-emerald-800 text-white rounded cursor-pointer"
                        >
                            Donate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
