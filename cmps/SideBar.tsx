import NewChat from "./NewChat"

function SideBar() {
    return (<div className="p-2 flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* Chat */}
                <NewChat />

                <div>
                    {/* Model */}

                </div>

                {/* Rows */}


            </div>

        </div>

    </div>
    )
}

export default SideBar