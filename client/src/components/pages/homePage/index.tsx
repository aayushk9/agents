import { Navbar } from "../../ui/navbar"
import { AgentNode } from "../../nodes/AgentNode"
import { ToolNode } from "../../nodes/ToolNode"

export function HomePage() {
    return (
        <>
          <div>
            <Navbar/>
          </div>
          <div>
           <AgentNode data={{label: "NFT Agent"}}/>
           <ToolNode data={{label: "API Fetchet"}}/>
          </div>
        </>
    )
}