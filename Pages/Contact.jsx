function Contact(){
    return(
        <div className='Section1'>
        <form>
            <p>First Name<sup>*</sup></p>
            <p><input type="text" placeholder="First Name" name="FName" required></input></p>
            <p>Last Name<sup>*</sup></p>
            <p><input type="text" placeholder="Last Name" name="LName" required></input></p>

            <p>Email<sup>*</sup> :</p>
            <p><input type="text" placeholder="email@gmail\.com" name="Email" required></input></p>
            <p>Phone No :</p>
            <p><input type="text" placeholder="Phone No" name="Phone"></input></p>
            <p>Send us a message :</p>
            <p><textarea rows="5" cols="40" placeholder="Message us!" name="Message"></textarea></p>
        </form>
        </div>
    );
}

export default Contact