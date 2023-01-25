<button class="profile-button" onClick={handleToggle}>EDIT PROFILE</button>
            {showForm ?
                <form onSubmit={handleFormSubmit}>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for = "first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name: </ label>
                            <input  type = "text"
                                    id = "first_name"
                                    class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John/Jane"
                                    required
                                    value = {firstName}
                                    onChange = {(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label for = "last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name: </ label>
                            <input  type = "text"
                                    id = "last_name"
                                    class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder = "Doe"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <label for = "username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Userame: </ label>
                            <input  type= "text"
                                    id = "username"
                                    class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder = "Username"
                                    required
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div>
                            <label for = "Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: </ label>
                            <input  type = "text"
                                    id ="email"
                                    class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder = "Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div class="mb-6">
                        <div>
                            <label for = "profile-pic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture: </ label>
                            <input  type = "text"
                                    id = "profile_pic"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder = "Profile Picture URL"
                                    required
                                    value={profilePic}
                                    onChange={(e) => setProfilePic(e.target.value)}/>
                        </div>
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            :
            <>
            </>
            }