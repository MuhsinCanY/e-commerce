import React from 'react'

export default function EditorPick() {
  return (
    <div className="custom-container-out py-16 bg-white">
      <div className="container ">
        <div className="flex flex-col font-[Montserrat] font-bold">
          <div className="flex flex-col gap-2 p-4 mb-8">
            <h2 className="text-center text-[24px] tracking-wider text-t-3">
              EDITOR’S PICK
            </h2>
            <p className="text-center text-[14px]  font-normal tracking-wide text-t-2">
              Problems trying to resolve the conflict between{' '}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 bg-gray px-8">
            <div className="bg-t-1 col-span-2 row-span-2 relative ...">
              <img src="/assets/editorPick/editor1.jpeg" />
              <div className="absolute bottom-5 left-5 px-4 py-3 bg-white">
                MEN
              </div>
            </div>
            <div className="bg-t-1 row-span-2 relative">
              <img src="/assets/editorPick/editor2.jpeg" />
              <div className="absolute bottom-5 left-5 px-4 py-3 bg-white">
                WOMEN
              </div>
            </div>
            <div className="bg-t-1 relative">
              <img src="/assets/editorPick/editor3.jpeg" />
              <div className="absolute bottom-5 left-5 px-4 py-3 bg-white">
                ACCESSORIES
              </div>
            </div>
            <div className="bg-t-1 relative">
              <img src="/assets/editorPick/editor4.jpeg" />
              <div className="absolute bottom-5 left-5 px-4 py-3 bg-white">
                KIDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
