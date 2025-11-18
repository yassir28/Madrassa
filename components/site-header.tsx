"use client"
import { AlignJustify,  BarChart2,  BookOpen,  Bus,  CalendarDays,  ClipboardList,  FileText,  GraduationCap,  History, LayoutGrid, MessageSquare, Plus,  Settings,  Shield,  Users } from 'lucide-react'
import React from 'react'
//import SearchInput from './SearchInput'
import Image from 'next/image'
//import { signOut, useSession } from 'next-auth/react'
//import { useRouter } from 'next/navigation'
//import { generateInitials } from '@/lib/generateInitials'
//import Login from '@/app/login/page'
//import {
//  DropdownMenu,
//  DropdownMenuContent,
//  DropdownMenuItem,
//  DropdownMenuLabel,
//  DropdownMenuSeparator,
//  DropdownMenuTrigger,
//} from "@/components/ui/dropdown-menu"

import { Button} from "@/components/ui/button"
import {    Sheet,
            SheetContent,
            SheetHeader,
            SheetTitle,
            SheetTrigger,
} from "@/components/ui/sheet"

import {    NavigationMenu,
            NavigationMenuContent,
            NavigationMenuItem,
            NavigationMenuLink,
            NavigationMenuList,
            NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"

import {    Code,
            Book,
            PieChart,
            Fingerprint,
            DollarSign,
            Bell,
            Menu,
            X,
            ChevronDown,

} from 'lucide-react'

import {cn} from "@/lib/utils";

import Link from 'next/link'
import Logo from './logo'


const features= [
    {
        icon: Users,
        title: "Student Management",
        description: "Comprehensive Student Information System for managing enrollment, profiles and academic records with ease",
        href: "/features/academic-management"
    },
        {
        icon: GraduationCap,
        title: "Academic Management",
        description: "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
        href:"/features/academic-management"
    },
        {
        icon: MessageSquare,
        title: "Communication Hub",
        description: "Integrated messaging system with multi-channel notifications for seamless school-wide communication",
        href: "/features/communication"
    },
        {
        icon: DollarSign,
        title: "Financial Management",
        description: "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
        href: "/features/finance"
    },
        {
        icon: ClipboardList,
        title: "Staff Management",
        description: "Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing",
        href: "/features/staff-management"
    },
        {
        icon: Bus,
        title: "Transport Management",
        description: "Real-time transport tracking, route management, and automated notification for safe student transportation",
        href: "/features/transport"
    },
        {
        icon: BarChart2,
        title: "Analytics and Reports",
        description: "Powerful analytics tools for data-driven decisions with customizable reporting and insights",
        href: "/features/analytics"
    },
        {
        icon: BookOpen,
        title: "Resource Management",
        description: "Digital library system, inventory tracking, and facility scheduling in one integrated platform",
        href: "/features/resources"
    },

            {
        icon: CalendarDays,
        title: "Attendance System",
        description: "Automated attendance tracking for students and staff with instant notification capabilities",
        href: "/features/attendance"
    },
        {
        icon: FileText,
        title: "Examination Portal",
        description: "Complete examination management system from scheduling to result publication with secure access",
        href: "/features/examinations"
    },

        {
        icon: Bell,
        title: "Notice Board",
        description: "Digital notice board for announcements, events, and important updates with targeted distribution",
        href: "/features/security"
    },

        {
        icon: Shield,
        title: "Security And Access",
        description: "Role-based access control with data encryption and secure backups for complete peace of mind",
        href: "/features/transport"
    },



]
export default function SiteHeader() {
    const [open, setOpen] = React.useState(false);
    const [showFeatures, setShowFeatures] = React.useState(false);
    return (
            <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                    <div className='container max-w-6xl mx-auto  flex h-14 items-center justify-between'>
                        <div className='flex items-center space-x-4'>
                            <Logo/>

                            <NavigationMenu className='hidden md:flex'>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                            Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className='w-[800px] p-4'>
                                                <div className='flex items-center justify-between mb-4 pb-2 border-b'>
                                                    <h4 className='text-lg font-medium'>Features</h4>
                                                    <Link href="/features" className='text-sm text-blue-500 hover:underline'>
                                                        View all
                                                    </Link>
                                                </div>

                                                <div className='grid gap-4 md:grid-cols-3'>
                                                    {
                                                        features.slice(0,6).map((feature, index)=>(
                                                            <Link
                                                            key={index}
                                                            href={`/feature/${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                                                            className='flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors'
                                                            >
                                                                <div className='p-2 bg-muted rounded-md'>
                                                                    <feature.icon className='h-6 w-6 text-blue-500'/>
                                                                </div>
                                                                <div>
                                                                    <h5 className='font-medium mb-1'>
                                                                        {feature.title}
                                                                    </h5>
                                                                    <p className='text-sm text-muted-foreground'>
                                                                        {feature.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                                <div className='mt-6 pt-4 border-t'>
                                                    <div className='flex items-center justify-between'>
                                                        <div>
                                                            <h4 className='font-medium'>
                                                                Get Started
                                                            </h4>
                                                            <p className='text-sm text-muted-foreground'>
                                                                Start managing your school more efficiently today
                                                            </p>
                                                        </div>
                                                        <Button asChild variant="secondary">
                                                            <Link href="/contact-us">Get Started
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <Link href="/#pricing" legacyBehavior passHref>
                                            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                                Pricing
                                            </NavigationMenuLink>                                        
                                        </Link>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <Link href="/how-it-works" legacyBehavior passHref>
                                            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                                How it works
                                            </NavigationMenuLink>                                        
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost">Log in</Button>
                        <Button>Sign up</Button>
                        </div>

                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full p-0">
                                <SheetHeader className="border-b p-4">
                                <SheetTitle className="text-left">Navigation</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col py-4">
                                    <Link
                                        href="/"
                                        className="px-4 py-2 text-lg font-medium hover:bg-accent"
                                        onClick={() => setOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <button
                                    className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                                    onClick={() => setShowFeatures(!showFeatures)}
                                    >
                                        Features
                                        <ChevronDown
                                            className={cn(
                                            "h-5 w-5 transition-transform",
                                            showFeatures && "rotate-180"
                                            )}
                                        />
                                    </button>
                                    {showFeatures && (
                                        <div className="px-4 py-2 space-y-4">
                                            {features.map((feature, index) => (
                                                <Link
                                                    key={index}
                                                    href={`/feature/${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                                                    className="flex items-start gap-4 py-2"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <div className="p-2 bg-muted rounded-md">
                                                        <feature.icon className="h-6 w-6 text-blue-500" />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-medium mb-1">
                                                            {feature.title}
                                                        </h5>
                                                        <p className="text-sm text-muted-foreground">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                    <Link
                                        href="/#pricing"
                                        className="px-4 py-2 text-lg font-medium hover:bg-accent"
                                        onClick={() => setOpen(false)}
                                    >
                                        Pricing
                                    </Link>                            
                                    <Link
                                        href="/how-it-works"
                                        className="px-4 py-2 text-lg font-medium hover:bg-accent"
                                        onClick={() => setOpen(false)}
                                    >
                                        How it works
                                    </Link>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                                        <div className="grid gap-2">
                                            <Button variant="outline" className="w-full">Log in</Button>
                                            <Button className="w-full">Sign up</Button>
                                        </div>
                                    </div>
                                </div>

                            </SheetContent>
                        </Sheet>
                    </div>
                </header>   
    )
}


//export default function Header({setShowSidebar, showSidebar}) {
//    const {data:session, status}= useSession()
//    const router = useRouter()
//    if (status==="loading"){
//      return <p>Loading User..</p>
//    }
//    if (status=== "unauthenticated") {
//      return <Login/>
//    }
//    const username =session?.user?.name.split(" ")[0] ?? "";
//    const initials = generateInitials(session?.user?.name)
//    return(
//    <div className='bg-gray-100 h-12 flex items-center justify-between 
//                    px-8 border-b border-slate-200 '>
//        {/* Hamburger menu - shows only when sidebar is hidden */}
//        {!showSidebar && (
//          <button onClick={() => setShowSidebar(true)}>
//            <AlignJustify className='w-6 h-6'/>
//          </button>
//        )} 
//        <div className='flex gap-3'>
//          {/* Recent activities*/}
//          <button className='hidden lg:block'>
//            <History className='w-6 h-6'/>
//          </button>
//          {/* Search*/}
//          <SearchInput/>
//        </div>
//
//        <div className='flex items-center gap-3 hidden lg:flex'>
//          {/* Plus Icon*/}
//          <div className='pr-2 border-r border-gray-300'>
//            <button  className="p-1 rounded-lg bg-blue-600">
//              <Plus className='text-slate-50 w-4 h-4'/>
//            </button>
//          </div>
//
//          {/* users, notifis, settings*/}
//          <div className='flex pr-2 border-r border-gray-300 space-x-2'>
//          <button  className="p-1 rounded-lg hover:bg-slate-200">
//              <Users className='text-slate-900 w-4 h-4'/>
//            </button>
//            <button  className="p-1 rounded-lg hover:bg-slate-200">
//              <Bell className='text-slate-900 w-4 h-4'/>
//            </button>
//            <button  className="p-1 rounded-lg hover:bg-slate-200">
//              <Settings className='text-slate-900 w-4 h-4'/>
//            </button>
//          </div>
//
//          {/* 3rd section : Profile*/}
//          <div className="flex gap-3">
//
//            <DropdownMenu>
//              <DropdownMenuTrigger className='flex items-center'>
//                    <span>{username}</span>
//                    <ChevronDown className='w-3 h-3'/>
//              </DropdownMenuTrigger>
//              <DropdownMenuContent>
//                <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                <DropdownMenuSeparator />
//               
//                {/* Settings - Admin Only */}
//                {session.user?.role === "ADMIN" && (
//                  <DropdownMenuItem>
//                    <Link href="/side-bar/settings">Settings</Link>
//                  </DropdownMenuItem>
//                )}
//
//                <DropdownMenuItem>
//                  <button onClick={()=> signOut()}> Logout</button>
//                </DropdownMenuItem>
//                <DropdownMenuItem>Profile</DropdownMenuItem>
//                <DropdownMenuItem>Billing</DropdownMenuItem>
//                <DropdownMenuItem>Team</DropdownMenuItem>
//                <DropdownMenuItem>Subscription</DropdownMenuItem>
//              </DropdownMenuContent>
//            </DropdownMenu>
//
//
//
//
//            <button >
//                {session.user?.image?(
//                  <Image src= {session.user?.image} 
//                  alt= "user iamge" width={96} height={96} 
//                  className='w-8 h-8 rounded-full border border-slate-900'/>
//                ):(
//                  <div className="w-8 h-8 rounded-full 
//                  border border-slate-900 bg-white ">
//                    {initials}
//                  </div> 
//                )}
//            </button>
//            <button>
//                <LayoutGrid className='w-6 h-6 text-slate-900'/>      
//            </button>
//          </div>
//        </div>
//
//            <button className='lg:hidden'>
//                {session.user?.image?(
//                  <Image src= {session.user?.image} 
//                  alt= "user iamge" width={96} height={96} 
//                  className='w-8 h-8 rounded-full border border-slate-900'/>
//                ):(
//                  <div className="w-8 h-8 rounded-full 
//                  border border-slate-900 bg-white ">
//                    {initials}
//                  </div> 
//                )}
//            </button>        
//    </div>
//  )
//}
