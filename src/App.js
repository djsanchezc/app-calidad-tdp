import logo from './assets/img/logotdp.png';
import './App.css';

function App() {
    return (<>
            <div className="flex h-screen bg-green-300">
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex h-full">
                        <nav
                            className="flex flex-col text-[#C7D2FE] h-full bg-[#0066FF] gap-2 min-w-[240px] p-2 font-semibold">
                            <div className="mb-2 p-4">
                                <img className="w-[158px] h-[50]" src={logo} alt="Empresa"/>
                            </div>

                            <div role="button" tabIndex="0"
                                 className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all bg-[#013983] focus:bg-opacity-80 text-white focus:text-blue-900 outline-none">
                                <div className="grid place-items-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                        <path fillRule="evenodd"
                                              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Dashboard
                            </div>
                            <div role="button" tabIndex="0"
                                 className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:text-blue-900 outline-none">
                                <div className="grid place-items-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                        <path fillRule="evenodd"
                                              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Books
                            </div>
                            <div role="button" tabIndex="0"
                                 className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:text-blue-900 outline-none">
                                <div className="grid place-items-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                        <path fillRule="evenodd"
                                              d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Example Pages
                            </div>
                            <div role="button" tabIndex="0"
                                 className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:text-blue-900 outline-none">
                                <div className="grid place-items-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                        <path fillRule="evenodd"
                                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Profile
                            </div>
                            <div role="button" tabIndex="0"
                                 className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:text-blue-900 outline-none">
                                <div className="grid place-items-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                        <path fillRule="evenodd"
                                              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Settings
                            </div>
                            <div role="button" tabIndex="0"
                                 className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:text-blue-900 outline-none">
                                <div className="grid place-items-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                        <path fillRule="evenodd"
                                              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                Log Out
                            </div>
                        </nav>
                        <main className="flex flex-col w-full bg-[#F4F4F4] overflow-x-hidden overflow-y-auto mb-14">
                            <header className="shadow bg-white">
                                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex h-16 items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <button type="button"
                                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                        aria-controls="mobile-menu" aria-expanded="false">
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Open main menu</span>
                                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                    </svg>
                                                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M6 18L18 6M6 6l12 12"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-4 flex items-center md:ml-6">
                                                <button type="button"
                                                        className="relative rounded-full p-1 text-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5"></span>
                                                    <span className="sr-only">View notifications</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                                                    </svg>
                                                </button>

                                                <div className="relative ml-3">
                                                    <div>
                                                        <button type="button"
                                                                className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                                id="user-menu-button" aria-expanded="false"
                                                                aria-haspopup="true">
                                                            <span className="absolute -inset-1.5"></span>
                                                            <span className="sr-only">Open user menu</span>
                                                            <img className="h-8 w-8 rounded-full"
                                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                 alt=""/>
                                                        </button>
                                                    </div>
                                                    {/*<div
                                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                        role="menu" aria-orientation="vertical"
                                                        aria-labelledby="user-menu-button" tabIndex="-1">
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                           role="menuitem" tabIndex="-1" id="user-menu-item-0">Your
                                                            Profile</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                           role="menuitem" tabIndex="-1"
                                                           id="user-menu-item-1">Settings</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                           role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign
                                                            out</a>
                                                    </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="-mr-2 flex md:hidden">
                                            <button type="button"
                                                    className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                    aria-controls="mobile-menu" aria-expanded="false">
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Open main menu</span>
                                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>
                                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:hidden" id="mobile-menu">
                                    {/*<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                        <a href="#"
                                           className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                                           aria-current="page">Dashboard</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
                                    </div>*/}
                                    <div className="border-t border-gray-700 pb-3 pt-4">
                                        <div className="flex items-center px-5">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full"
                                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                     alt=""/>
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium leading-none text-white">Tom
                                                    Cook
                                                </div>
                                                <div
                                                    className="text-sm font-medium leading-none text-gray-400">tom@example.com
                                                </div>
                                            </div>
                                            <button type="button"
                                                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5"></span>
                                                <span className="sr-only">View notifications</span>
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                                                </svg>
                                            </button>
                                        </div>
                                        {/*<div className="mt-3 space-y-1 px-2">
                                            <a href="#"
                                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your
                                                Profile</a>
                                            <a href="#"
                                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
                                            <a href="#"
                                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign
                                                out</a>
                                        </div>*/}
                                    </div>
                                </div>
                            </header>
                            <div className="flex w-full mx-auto px-6 py-8">
                                <div
                                    className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                                    <div
                                        className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post
                                    </div>
                                    <div
                                        className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post
                                    </div>
                                    <div
                                        className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post
                                    </div>
                                    <div
                                        className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post
                                    </div>
                                    <div
                                        className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
