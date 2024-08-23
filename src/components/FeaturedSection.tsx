'use client';
import React from 'react'
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
// import Image from 'next/image';

interface Course {
    id: 1,
    title: number,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedSection() {
    const featuredCourses = courseData.courses.filter((course) => course.isFeatured)
    return (
        <div className='p-12 bg-stone-800'>
            <div>
                <div className="text-center">
                    <h2 className='text-center uppercase tracking-wide font-semibold text-3xl mb-2'>Featured Courses</h2>
                    <p className='text-center uppercase tracking-widest font-semibold text-sm text-teal-300'>Learn without Limits</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course) => (
                        <div className='flex justify-center iteams-center' key={course.id}>

                            <BackgroundGradient className="h-full rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {course.description}
                                </p>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Buy now </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        {course.price}
                                    </span>
                                </button>
                            </BackgroundGradient>

                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-14 text-center'>
                <Link href={'/courses'} className='cursor-pointer text-slate-200 text-base hover:text-sm transition-all'>View all courses</Link>
            </div>
        </div>
    )
}

export default FeaturedSection
