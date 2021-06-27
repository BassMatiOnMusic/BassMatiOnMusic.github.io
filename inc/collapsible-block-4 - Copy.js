////	collapsible-block-4.js
////	2021-06-11 usp

const controllers = document.querySelectorAll( "[cbc]" );
for ( let i = 0; i < controllers.length; i++ ) {
	controllers[ i ].addEventListener( "click", function ( ) {
		this.toggleAttribute( "expand" );
		const block = this.nextElementSibling;
		block.style.maxHeight = block.style.maxHeight ? "" : block.scrollHeight + "px";
		} ) }

