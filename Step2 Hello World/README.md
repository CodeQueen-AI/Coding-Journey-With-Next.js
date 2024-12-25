# Next.js First Project 
Hello World

# Build a First project
Create a first project of hello World with styling of tailwind css 
import React from 'react'

const page = () => {
  return (
    <div className='text-orange-800 text-6xl font-extrabold flex items-center justify-center min-h-screen bg-gradient-to-bl from-orange-500 via-orange-300 to-orange-700'>
      Hello World!
    </div>
  )
}
export default page

# Setup of Next.js 
npx create-next-app@latest projectname 
cd projctname
npm run dev
