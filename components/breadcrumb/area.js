const BreadcrumbArea = (props) => {
    return (
        <section class="page-title-area bg-image ptb--80" style={{backgroundImage: "url(assets/img/"+props.image+")"}}>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title">{props.title}</h1>
                        <ul class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li class="current"><span>{props.title}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreadcrumbArea;