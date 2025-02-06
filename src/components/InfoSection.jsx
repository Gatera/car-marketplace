import React from 'react'

function InfoSection() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="space-y-4 md:space-y-8">
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
          architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.
        </p>
      </div>

      <img
        src="https://cdn-ds.com/blogs-media/sites/177/2022/02/05102759/2022-Mercedes-Benz-GLE_o.png"
        className="rounded"
        alt=""
      />
    </div>
  </div>
</section>
  )
}

export default InfoSection