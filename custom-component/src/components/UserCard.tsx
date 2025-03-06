type UserProps = {
    user: {
        id: number;
        name: string;
        email: string;
        profileUrl: string;
    };
};


export const UserCard = ({user} : UserProps) => {
    // const profileUrl = user.profileUrl
    // console.log(profileUrl)
    return(
        <div>
           <div className="border p-4 mb-4 shadow-md rounded-lg">
            <img className="h-40" src={user.profileUrl} alt="" />
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.id}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            {/* <p className="text-sm text-gray-600">{user.designation}</p> */}

        </div>
        </div>
    )

}

// https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png