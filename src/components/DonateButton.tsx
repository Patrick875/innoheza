'use client'

import { closePaymentModal, FlutterWaveButton } from "flutterwave-react-v3";
import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";

export default function DonateButton({ amount, email, name, currency = 'USD', phone_number }: {
    amount: number;
    email: string;
    name: string;
    currency: 'USD' | 'EUR',
    phone_number: string;
}) {
    const config = {
        public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
        tx_ref: Date.now().toString(),
        amount,
        currency: currency,
        payment_options: 'card',

        customer: {
            email,
            name,
            phone_number
        },
        customizations: {
            title: 'Donate',
            description: 'Thank you',
            logo: '/logo.png'
        }
    }
    const fwConfig = {
        ...config,
        text: 'Donate Now',
        callback: (response: FlutterWaveResponse) => {
            console.log('response', response);
            closePaymentModal();

            fetch('/api/verify-donation', {
                method: 'POST',
                body: JSON.stringify({
                    tx_ref: response.tx_ref,
                    transaction_id: response.transaction_id
                })
            })

        },
        onClose: () => { }
    }
    return <FlutterWaveButton {...fwConfig} />;
}