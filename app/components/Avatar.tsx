'use client';
import Image from 'next/image';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Avatar = () => {
    // return <Image alt="Avatar" className="rounded-full" height={30} width={30} src={'/images/placeholder.jpg'} />;
    return <FaUserCircle size={30} />;
};

export default Avatar;
