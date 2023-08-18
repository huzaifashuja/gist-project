import "./Gist.css"
import Octicon from 'react-octicon'

const Gist = ({ gist }) => {
    return (<>
        <div className="wrapper">
            <div className="first-line" >
                <div className="profile">
                    <img className="avatar-image" src={gist?.owner.avatar_url} width={30} />
                    <a href={gist?.owner.html_url} target="_blank">{gist?.owner.login}</a>
                </div>
                <div>
                    <a href="" target="_blank"><Octicon name="code" /> {Object.keys(gist.files).length} Files</a>
                    <a href={gist.forks_url} target="_blank"><Octicon name="repo-forked" /> Forks</a>
                    <a href={gist.comments_url} target="_blank"><Octicon name="comment" />  Comments</a>
                    <a href={gist?.owner.starred_url} target="_blank"><Octicon name="star" />  Stars</a>
                </div>
            </div>
            <div className="date">
                <p>Created at: {gist.created_at.split("T")[0]}</p>
                <p>Last Updated: {gist.updated_at.split("T")[0]}</p>
            </div>
            <div className="desc">
                <p>{gist.description}</p>
            </div>
            <div className="file">
                {
                    Object.entries(gist.files).map((item, i) =>
                        < a href={item[1].raw_url} target="_blank" key={i} ><Octicon name="file" />  {item[1].filename}</a>
                    )
                }
            </div>
        </div >
        <hr style={{ opacity: "0.2" }} />
    </>)
}



export default Gist;
