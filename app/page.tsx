import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
import NewChat from '../components/NewChat'


function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center text-white lg:min-h-screen px-2'>
            <h1 className='text-5xl font-bold lg:mb-20 mb-5'>ChatGpt</h1>
            <div className='lg:hidden mb-5'>
                <NewChat />
            </div>
            <div>
                <div className='flex space-x-2 text-center '>

                    {/* Card 1 */}
                    <div>
                        <div className='flex flex-col items-center justify-center mb-5'>
                            <SunIcon className="h-8 w-8 " />
                            <h2>Examples</h2>
                        </div>
                        <div className='space-y-2'>
                            <p className='infoText'>"Explain Something to me"</p>
                            <p className='infoText'>"Whar is the difference between a dog and cat ?"</p>
                            <p className='infoText'>"What is the color of the sun?"</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div>
                        <div className='flex flex-col items-center justify-center mb-5'>
                            <BoltIcon className="h-8 w-8 " />

                            <h2>Capabilities</h2>
                        </div>
                        <div className='space-y-2'>
                            <p className='infoText'>"Change the ChatGPT Model to use"</p>
                            <p className='infoText'>"Massages are strord in the Firestore"</p>
                            <p className='infoText'>"Hot Toast notifications when CharGPT thinking"</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className='hidden sm:inline'>
                        <div className='flex flex-col items-center justify-center mb-5'>
                            <ExclamationTriangleIcon className="h-8 w-8 " />

                            <h2>Limitations</h2>
                        </div>
                        <div className='space-y-2'>
                            <p className='infoText'>"May occasionlly generate inorrect informain"</p>
                            <p className='infoText'>"May occasioanally produce harmful instructions or biased"</p>
                            <p className='infoText'>"Limited knowledge of world and events after 2021"</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage