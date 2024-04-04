import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'>{
    children: string
    
}

export function NavLink (props: NavLinkProps)  {
    props.children
    props.href
    return (
        <a {...props}  className="font-medium text-sm">
            {props.children}</a>
    )
}