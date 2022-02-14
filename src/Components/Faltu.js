import { Button, Form, FormGroup, Input, Table, Media } from "reactstrap";

function Faltu() {
    return (
        <div className="container">
            {/* <Media>
                <Media>
                    <Media left top href="#">
                        <Media
                            object
                            src="http://place-puppy.com/100x200"
                            alt="place-puppy image"
                        />
                    </Media>
                    <Media body>
                        <Media heading>Top aligned media</Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                        scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                        in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                        nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
                <Media>
                    <Media left middle href="#">
                        <Media
                            object
                            src="http://place-puppy.com/200x200"
                            alt="place-puppy image"
                        />
                    </Media>
                    <Media body>
                        <Media heading>Middle aligned media</Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                        scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                        in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                        nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
                <Media>
                    <Media left bottom href="#">
                        <Media
                            object
                            src="http://place-puppy.com/300x200"
                            alt="place-puppy image"
                        />
                    </Media>
                    <Media body>
                        <Media heading>Bottom aligned media</Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                        scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                        in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                        nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
            </Media> */}
            <Media list>
                <Media tag="li">
                    <Media left href="#">
                        <Media object src="http://placekitten.com/201/201" alt="cat" />
                    </Media>
                    <Media body>
                        <Media heading>Media heading</Media>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <Media>
                            <Media left href="#">
                                <Media object src="http://placekitten.com/201/201" alt="cat" />
                            </Media>
                            <Media body>
                                <Media heading>Nested media heading</Media>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <Media>
                                    <Media left href="#">
                                        <Media
                                            object
                                            src="http://placekitten.com/201/201"
                                            alt="cat"
                                        />
                                    </Media>
                                    <Media body>
                                        <Media heading>Nested media heading</Media>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </Media>
                                </Media>
                            </Media>
                        </Media>
                        <Media>
                            <Media left href="#">
                                <Media object src="http://placekitten.com/201/201" alt="cat" />
                            </Media>
                            <Media body>
                                <Media heading>Nested media heading</Media>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Media>
                        </Media>
                    </Media>
                </Media>
                <Media tag="li">
                    <Media body>
                        <Media heading>Media heading</Media>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Media>
                    <Media right href="#">
                        <Media object data-src="http://placekitten.com/201/201" alt="cat" />
                    </Media>
                </Media>
            </Media>
        </div>
    );
}
export default Faltu;