import { NextFetchEvent, NextRequest, NextResponse  } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    NextResponse.next()
    //return new Response('Hello, world!')
  }