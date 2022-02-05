const HeaderList = (props) => {
    return (
        <ul className={props.ul}>
            <li className={props.li}><a href="#">Home</a></li>
            <li className={props.li}><a href="#">Class</a></li>
            <li className={props.li}><a href="#">Work</a></li>
            <li className={props.li}><a href="#">About</a></li>
        </ul>
    );

}


const ToggleMenu = (props) => {
    const openMuneStyle = props.toggleOnMenu ? { right: "-35%" } : { right: "0", zIndex: "1" };
    return (
        <React.Fragment>
            <div className="menu" style={openMuneStyle}>
                <HeaderList 
                ul="close-bar"
                li= "menu-item" />
                <div className="close" onClick={props.handleClickMenu}>X</div>
            </div>
                <header className="main-header">
                    <h1 className="name">
                        <a href="#">week1 RWD<img className="logo" src="img/logo.png" alt="logo" /></a>
                    </h1>
                <HeaderList 
                ul="nav-bar"
                li= "item" />
                <img className="icon" src="img/menu.png" alt="icon" onClick={props.handleClickMenu}/>
                </header>
            </React.Fragment>
    );
}

const ToggleHeadline = props => {
    return (
        <h1 className="headline" onClick={props.handleClickHeadline.bind(props)}>
        {props.toggleOnHeadline ? 'Assignment1' : 'Have a Good Time!'}
        </h1>
    );
}

function Section(props) {
    return (
        <section className={props.section} style={props.style}>
            <div className={props.row}>
                <div className={props.col}>
                    <div className={props.col_1}>
                        <h3>{props.header1}</h3>
                        <p>{props.content1}</p>
                    </div>
                </div>
                <div className={props.col}>
                    <div className={props.col_1}>
                        <h3>{props.header2}</h3>
                        <p>{props.content2}</p>
                    </div>
                </div>
                <div className={props.col}>
                    <div className={props.col_1}>
                        <h3>{props.header3}</h3>
                        <p>{props.content3}</p>
                    </div>
                </div>
                <div className={props.col}>
                    <div className={props.col_1}>
                        <h3>{props.header4}</h3>
                        <p>{props.content4}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ToggleLearning = props => {
    const style = props.toggleOnLearning ? { display: "none" } : { display: "block" };
    const title = props.toggleOnLearning ? "Star to Learn" : "Week2 Learning";
    return (
        <React.Fragment>
            <footer className="main-footer">
                <div className="button" onClick={props.handleClickLearning}>{title}</div>
            </footer>
            <Section 
            section="down-section"
            style={style}
            row= "row"
            col= "col"
            col_1= "col-1"
            header1= "JavaScript"
            content1= "JavaScript Basics"
            header2= "JavaScript"
            content2= "Loops &amp; Arrays &amp; Objects"
            header3= "JavaScript"
            content3= "Object-Oriented JavaScript"
            header4= "JavaScript"
            content4= "JavaScript &amp; the DOM"
            />
         </React.Fragment>
    );
}

class App extends React.Component {
    state = {
        toggleOnMenu: true,
        toggleOnHeadline: true,
        toggleOnLearning: true
    };

    handleClickMenu = () => 
        this.setState({toggleOnMenu: !this.state.toggleOnMenu});

    handleClickHeadline = () => 
        this.setState({toggleOnHeadline: !this.state.toggleOnHeadline});
    
    handleClickLearning = () => 
        this.setState({toggleOnLearning: !this.state.toggleOnLearning});

    render() {
        return (
            <React.Fragment>
                <ToggleMenu 
                 toggleOnMenu={this.state.toggleOnMenu}
                 handleClickMenu={this.handleClickMenu}
                 />
                <div className="banner">
                    <ToggleHeadline
                    toggleOnHeadline={this.state.toggleOnHeadline}
                    handleClickHeadline={this.handleClickHeadline} 
                    />
                    <span>RWD Page Layout in pure HTML/CSS</span>
                </div>
                <h2>Learning From Week1</h2>
                <Section 
                row= "row"
                col= "col"
                col_1= "col-1"
                header1= "HTML"
                content1= "HTML Basics"
                header2= "CSS"
                content2= "CSS Basics &amp; Mobile-First CSS Layout"
                header3= "Flexbox"
                content3= "CSS Flexbox Layout &amp; Responsive Layouts"
                header4= "Git/GitHub"
                content4= "Version Control with Git &amp; Hosting Website with GitHub Pages"
                />
                <ToggleLearning
                toggleOnLearning={this.state.toggleOnLearning}
                handleClickLearning={this.handleClickLearning}   
                />
             </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));