import React from 'react'

function About() {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
    <img src="about.png" alt="" className="w-full max-w-sm h-auto" />
    <div className="py-10 sm:py-60 px-5 sm:px-10 text-center sm:text-left">
      <h1 className="font-bold text-3xl py-5">
        React development is carried out by passionate developers
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eligendi hic iste quod quo magni blanditiis. Iste quaerat sunt ullam voluptate, vitae numquam magnam quam! Minima fugiat quisquam praesentium, facilis blanditiis quae ab voluptate temporibus officiis animi accusantium id deserunt porro atque veniam quo, accusamus expedita ratione voluptatem labore velit.
      </p>
    </div>
  </div>
</div>
  )
}

export default About