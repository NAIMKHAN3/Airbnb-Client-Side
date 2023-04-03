'use client';
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((value) => !value)
    }
    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={() => { }}
                    className="
            hidden
            md:block
            text-sm
            font-semibold
            px-4
            py-3
            hover:bg-neutral-100
            rounded-full
            transition
            cursor-pointer
            "
                >
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            "
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar></Avatar>
                    </div>
                </div>
            </div>
            {
                isOpen && <div
                    className='absolute top-12 right-0 w-[40vh] md:w-3/4 overflow-hidden rounded-xl shadow-md text-sm'
                >
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem
                                onClick={() => { }}
                                label='LogIn'
                            />
                            <MenuItem
                                onClick={() => { }}
                                label='SignUp'
                            />
                        </>
                    </div>
                </div>
            }

        </div>
    );
};

export default UserMenu;