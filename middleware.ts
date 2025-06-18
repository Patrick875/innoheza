// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const url = request.nextUrl;

	// Allow access to the coming soon page and static files
	if (
		url.pathname.startsWith("/coming-soon") ||
		url.pathname.startsWith("/_next") ||
		url.pathname.startsWith("/favicon.ico") ||
		url.pathname.startsWith("/api")
	) {
		return NextResponse.next();
	}

	// Redirect all other requests
	url.pathname = "/coming-soon";
	return NextResponse.rewrite(url);
}
