import {NextRequest, NextResponse} from 'next/server'

export function GET(request:NextRequest) {
  const url = request.nextUrl; 
  const name = url.searchParams.get('name')
  const age = url.searchParams.get('name')
  return NextResponse.json({url: url,name:name,age:age})
}

