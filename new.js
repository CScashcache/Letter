document.addEventListener("DOMContentLoaded", function () {
    // Replace content when button is clicked
    document.getElementById("startButton").addEventListener("click", function () {
        let content = document.getElementById("content");

        // Clear everything inside the div and replace it with the vday card content
        content.innerHTML = `
            <div class="valentines_card" id="vdayCard">
                <div class="front_card">
                    <img src="Gif and PNG/vday.png" class="front_img">
                    <div class="front_text">
                        <h3>A letter for you...</h3>
                    </div>    
                </div>
                <div class="inside_card">
                    <img src="Gif and PNG/inside.png" class="inside_img">
                    <div class="inside_text">
                        <h4>Hi ::)) I'll straight to the point.
						Gusto kita Precious Dale.
						Tama talaga yung sinasabi nila na yung ngiti mo ay nakakabighani at ayaw kong mawala ang ngiti mo. 
						</h4>
                        <h3>I can't wait for February 14 so...</h3>
                    </div>
                </div>
            </div>
            <button id="continueButton" style="display: none;">Continue</button>
			<style>
				body {
					margin: 0;
					padding: 16px;
					height: 100vh;
					background: #ffc0cb;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.valentines_card {
					position: relative;
					transform-style: preserve-3d;
					transform: perspective(2500px);
					transition: 1s;
					width: 90vw;
					max-width: 450px;
					height: 90vh;
					max-height: 600px;
					cursor: pointer;
				}

				.front_img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					position: absolute;
					top: 0;
					left: 0;
				}

				.inside_img {
					width: 450px;
					object-fit: cover;
					position: absolute;
					top: 0;
					left: 0;
				}

				.front_card, .inside_card {
					position: absolute;
					width: 100%;
					height: 100%;
					background-color: whitesmoke;
					text-align: center;
					box-shadow: 0 24px 40px -8px #ff1493;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: center;
					padding-bottom: 20px;
				}

				.front_card {
					z-index: 2;
					transform-origin: left;
					transition: transform 1s;
				}

				.inside_card {
					z-index: 1;
				}

				.front_text, .inside_text {
					color: #A60657;
					font-family: 'Caveat';
					font-size: 24px;
					position: relative;
					z-index: 3;
					padding: 20px;
					text-align: center;
				}

				button {
					margin-top: 10px;
					padding: 10px 20px;
					font-size: 18px;
					background-color: #A60657;
					color: white;
					border: none;
					cursor: pointer;
					border-radius: 8px;
				}

				button:hover {
					background-color: #8b0547;
				}

				.flipped .front_card {
					transform: rotateY(-160deg);
				}
				</style>
				`;

        // Add event listener to flip the card on click
        document.getElementById("vdayCard").addEventListener("click", function () {
            document.querySelector(".valentines_card").classList.toggle("flipped");

            // Show the continue button after card flips
            document.getElementById("continueButton").style.display = "block";
        });

        // Add event listener to the "continue" button
        document.getElementById("continueButton").addEventListener("click", function () {
            content.innerHTML = `
                <img src="Gif and PNG/what.gif" alt="asking tonton">
                <div class="question">
                    <p style="font-size: 24px;">Can I be your Valentine?</p>
                    <button id="yesBtn">Yes</button>
                    <button id="noBtn">No</button>
                </div>
            `;

            const yesBtn = document.getElementById("yesBtn");
            const noBtn = document.getElementById("noBtn");

            // "Yes" button functionality
            yesBtn.addEventListener("click", function () {
                content.innerHTML = `
                    <div style="text-align: center;">
                        <img src="Gif and PNG/love.gif" alt="Love GIF" style="display: block; margin: 0 auto;">
                        <p style="font-size: 24px;">Yaaaaaay! Thank you!</p>
                    </div>
                
                    <div style="text-align: center; margin-top: 50px;">
                        <button id="surpriseBtn" style="padding: 12px 25px; font-size: 18px; background: #ffa500; color: white; border: none; cursor: pointer; border-radius: 5px;">Click for a Surprise</button>
                    </div>
                `;

                document.getElementById("surpriseBtn").addEventListener("click", function () {
                    content.innerHTML = `
                        <div style="text-align: center; margin-top: 20px;">
                            <img src="Gif and PNG/itinerary.png" alt="Itinerary Image" style="width: 70%; max-width: 500px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); margin-bottom: 20px;">
                            <br>
                            <a id="downloadBtn" href="Gif and PNG/itinerary.png" download style="display: inline-block; padding: 12px 25px; background: #FF6863; color: white; border-radius: 5px; text-decoration: none; font-size: 18px; font-weight: bold; transition: 0.3s;">Download Itinerary</a>
                        </div>
                    `;
                });
            });

            // "No" button functionality
            const messages = [
                "Ayaw mo?",
                "Sure ka na ayaw mo?",
                "Consider please?",
                "Princess...",
                "Pag-isipan mo muna",
                "If you say no, malulungkot ako...",
                "I will be very sad...",
                "I will be very very very sad...",
                "Ok fine, last na to...",
                "Just kidding, say yes please! ❤️"
            ];

            let messageIndex = 0;

            noBtn.addEventListener("click", function () {
                // Handle the escalating messages and button adjustments
                noBtn.textContent = messages[messageIndex];
                messageIndex = (messageIndex + 1) % messages.length;

                // Increase the font size of the Yes button for each "No" click
                const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
                yesBtn.style.fontSize = `${currentSize * 1.5}px`;
            });
        });
    });
});