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

class ToggleMenu extends React.Component {
    state = {
        toggleOn: true
    };
    handleClick = () => 
        this.setState({toggleOn: !this.state.toggleOn});
    
    render() {
        const openMuneStyle = this.state.toggleOn ? { right: "-35%" } : { right: "0", zIndex: "1" };
        return (
            <React.Fragment>
                 <div className="menu" style={openMuneStyle}>
                    <HeaderList 
                    ul="close-bar"
                    li= "menu-item" />
                    <div className="close" onClick={this.handleClick}>X</div>
                </div>
                <header className="main-header">
                    <h1 className="name">
                        <a href="#">week1 RWD<img className="logo" src="img/logo.png" alt="logo" /></a>
                    </h1>
                    <HeaderList 
                    ul="nav-bar"
                    li= "item" />
                    <img className="icon" src="img/menu.png" alt="icon" onClick={this.handleClick}/>
                </header>
            </React.Fragment>
        );
    }
}

class ToggleHeadline extends React.Component {
    constructor() {
        super();
        this.state = {
            toggleOn: true
        };
    }
    handleClick = () => {
        this.setState({
            toggleOn: !this.state.toggleOn
        });
    }
    render() {
        return (
            <h1 className="headline" onClick={this.handleClick.bind(this)}>
        {this.state.toggleOn ? 'Assignment1' : 'Have a Good Time!'}
        </h1>
        );
    }
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

class ToggleLearning extends React.Component {
    state = {
        toggleOn: true
    };

    handleClick = () => {
        this.setState({
            toggleOn: !this.state.toggleOn
        });
    }
    render() {
        const style = this.state.toggleOn ? { display: "none" } : { display: "block" };
        const title = this.state.toggleOn ? "Star to Learn" : "Week2 Learning";
        return (
            <React.Fragment>
                <footer className="main-footer">
                    <div className="button" onClick={this.handleClick}>{title}</div>
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
}

ReactDOM.render(
    <React.Fragment>
        <ToggleMenu />
        <div className="banner">
            <ToggleHeadline />
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
        <ToggleLearning  />
    </React.Fragment>,
    document.getElementById('root'));