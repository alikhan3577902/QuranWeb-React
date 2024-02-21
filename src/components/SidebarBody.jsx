import { AiOutlineBug, AiOutlineCoffee, AiOutlineFolderOpen, AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"

export default function SidebarBody() {
    return (
        <div className="sidebar-body">
            <div className="sidebar-body-menu">
                <ul>
                    <li>
                        <AiOutlineCoffee />
                        <a href="/#">Trakteer coffe</a>
                    </li>
                    <li>
                        <AiOutlineCoffee />
                        <a href="/#">Trakteer coffe</a>
                    </li>
                    <li>
                        <AiOutlineCoffee />
                        <a href="/#">Trakteer coffe</a>
                    </li>
                    <li>
                        <AiOutlineBug />
                        <a href="/#"> Report bug</a>
                    </li>
                    <li>
                        <AiOutlineFolderOpen />
                        <a href="/#">This Repository</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <h3 className="footer-title">Contact me</h3>
                <div className="icons-social">
                    <a href="https://github.com/alikhan3577902" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
                    <a href="https://wa.me/+923252250078" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
                </div>
                <h4 className="copyright">Developed by <b>MUHAMMAD ALI</b></h4>
                <h4 className="copyright">Developed by <b>Ahmad Shaleh</b></h4>
            </div>
        </div>
    )
}
