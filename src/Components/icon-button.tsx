import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

            // PRECISO COLOCAR A INTERFACE PARA FAZER O ...PROPS E TER A IMPORTAÇÃO
interface iconButtonProps extends ComponentProps<'button'> {
    transparent? : boolean
}
           //CONDICIONAIS E ESTILIZAÇÃO DOS BOTÕES DE PASSAR A PÁGINA
export function IconButton ({transparent, ...props}: iconButtonProps) {
    return (
        <button {...props}
         
            className={twMerge('bg-white/10 border border-white/10 rounded-md p-1.5',
               transparent ? 'bg-black/20' : 'bg-white/10', 
               props.disabled ? 'opacity-50' : null,
            )}
        />
    )
}