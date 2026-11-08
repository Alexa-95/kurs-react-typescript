import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}
  
function Message({ children }: Props) {
    return children
}

export default Message;