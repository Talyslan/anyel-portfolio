import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

export function MenuHamburger() {
    return (
        <Sheet>
            <SheetTrigger className="block md:hidden cursor-pointer">
                <MenuIcon />
            </SheetTrigger>
            <SheetContent className="bg-secondary flex flex-col justify-center items-center h-full">
                <SheetHeader>
                    <nav className="w-full h-1/2">
                        <ul
                            className="w-full flex flex-col items-center gap-5 justify-around
                        [&>li>a]:py-2 md:[&>li>a]:px-9 [&>li>a]:px-4
                        [&>li>a]:rounded-full
                        [&>li>a]:text-gray-300
                        [&>li>a]:transition-colors [&>li>a]:duration-200"
                        >
                            <li>
                                <SheetClose asChild>
                                    <a href="#initial">Início</a>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <a href="#projects">Projetos</a>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <a href="#about">Sobre</a>
                                </SheetClose>
                            </li>
                        </ul>
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
