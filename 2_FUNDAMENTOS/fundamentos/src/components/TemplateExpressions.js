    const TemplateExpressions = () => {

        const name = "Wallames"
        const date = {
            age: 28,
            job: "Sushiman",
        };

        return (
            <div>
                <h1>Ola {name}, tudo bem </h1>
                <p>voce trabalha como {date.job} e tem  {date.age} anos</p>
            </div>
        )

    };

    export default TemplateExpressions