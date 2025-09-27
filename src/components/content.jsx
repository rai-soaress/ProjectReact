import React, { useState } from 'react'

function Content() {
    const [verify, setVerify] = useState(false)
    
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-10'>
            <button onClick={() => verify ? setVerify(false) : setVerify(true)} className='px-10 py-5 rounded cursor-pointer bg-red-500 text-white text-3xl'> + </button>
            {verify && 
                <div>
                    <h2 className='text-3xl'>Clique no botão para adicionar</h2>
                </div>
            }

            {!verify && <p className='text-2xl text-gray-500'>Você ainda não adicionou nada</p>}

        </div>
    )
}

export default Content