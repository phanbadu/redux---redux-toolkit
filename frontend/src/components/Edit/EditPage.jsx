import { useState } from 'react';
import './Edit.css';
import Input from '../InputFields/input';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/apiRequests';

const EditPage = (props) => {

    const user = useSelector((state) => state.user);

    const { setIsEdit } = props;
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [theme, setTheme] = useState("#ff9051");
    const [url, setUrl] = useState(user.avaUrl);

    const avaUrl = [
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/347251545_994758324871623_5445790195550295858_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SpZZ_9Lh7acAX_zGaxj&_nc_ht=scontent.fdad3-1.fna&_nc_e2o=f&oh=00_AfA3uT0f2ZjEr825AzQ1hFBbhB7OwW8JweH7k8-0Wz8Irg&oe=65303687",
        "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/347600115_994758411538281_8051765515520571077_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jzztezT7pSsAX_8NayL&_nc_ht=scontent.fdad3-5.fna&_nc_e2o=f&oh=00_AfB_XIeZfqv1g2HZI4nHuzkGEdeyCCyGaN-hdLuT39NP8g&oe=65303080",
        "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/347246816_994758478204941_2063052689372908456_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FbO-sii4FKsAX9Jq9zh&_nc_ht=scontent.fdad3-5.fna&_nc_e2o=f&oh=00_AfDccYe6WYmB7TMWpN0c2vXgBSouRmfw5kEe9byRkTB5sQ&oe=653086BD",
        "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/347578912_994758558204933_7878520676948730400_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nljKWFoX9VYAX8azlsk&_nc_ht=scontent.fdad3-5.fna&_nc_e2o=f&oh=00_AfBtXJqAuMPJEE5-z-69oQl78SMWT6JYOagZWso4ob-7BQ&oe=65306C8C",
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/347258050_994758668204922_2950607827570915243_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=clj56fqO0w0AX8dSgPc&_nc_ht=scontent.fdad3-1.fna&_nc_e2o=f&oh=00_AfAIZYq23z4tH6SCCMPz_BRd6ng-39tMF4cLl7v2bUy2_Q&oe=65310971",
        "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/347236101_994758778204911_1910735389738782795_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yFmWtL0KOCEAX9epkpO&_nc_ht=scontent.fdad3-4.fna&_nc_e2o=f&oh=00_AfDFA5DxliKxZ8HKnIXSkt778jwIKCjthX21_yQprCuj8g&oe=652F4EC2",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme,
        };

        updateUser(updatedUser, dispatch);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">SAVE</button>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input
                            label="Display name"
                            data={user.name}
                            setData={setName}
                        />

                        <Input
                            label="Age"
                            data={user.age}
                            setData={setAge}
                        />
                        
                        <Input
                            label="About"
                            inputType="textarea"
                            classStyle="input-about"
                            data={user.about}
                            setData={setAbout}
                        />
                        <label>PROFILE PICTURE</label>
                        <div className="input-image-container">
                            {avaUrl.map((url) => {
                                return (
                                    <div style={{ display: 'inline'}} key={url}>
                                        <img src={url} alt="" className='input-image' onClick={(e) => setUrl(e.target.src)}/>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="theme-container">
                            <label>Theme</label>
                            <input type="color" className='theme-color' value={theme} onChange={(e) => setTheme(e.target.value)}/>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default EditPage;