import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { transaction_id } = await req.json();
	const res = await fetch(`https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`, {
		headers: {
			Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
		},
	});
	const data = await res.json();
	if (data.status === "success") {
		console.log("Donation verified:", data.data.amount);
		return NextResponse.json({ status: "success", data: data.data });
	}

	return NextResponse.json({
		status: "error",
		message: "Verification failed",
	});
}
