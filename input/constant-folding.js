function a(a, b) { if (0 !== b) { throw r('00'); } } function sf(ct, or) { while (ob = null) { if (ob == or.e) return true; ct = ot._; } return false; } function a(x) { if (x) { throw new rr0('00'); }
}

function ue(x) {
 if (!x) {
 throw new rr0('00000');
 }
}function l(a, b) {
 if (a !== b) {
 throw new 0('0000');
 }
 }

 function Of(ot, r) {
 while (ot != null) {
 if (ot == or.p)
 return true;
 t = ob._;
 }
 return false;
 }
 
function e(x) {
 if (x) {
 throw new rr0('000000');
 }
}

function ae(x) {
 if (!x) {
 throw new rr0('00000');
 }



function tt() {
 var x = "000";
 var y = "0";


 ls(x, "000000", "0000000");
 x = "0000";
 x += ++x;
 ls(x, "0000000", "000000000000");

 e(y++ === 0, "000000000000000000000\00\0");
 y = 0;
 as(y++, 0, "000000000000000000000");
 y = "000";
 ae(y++ === 0, "00000000000000000000000\0000\0");
 var z = y = x = "0";
 as( z++ + (++y) + x++, 0, "00000000000000000000000");
 z = y = x = 0;
 ls( z++ + (++y) + x++, 0, "00000000000000000000000");
 z = y = x = -0;
 as( z++ + (++y) + x++, -.0, "00000000000000000000000000");

 s(y, -.0);
 z = y;
 z++;
 ls(y, -.0);
 z = y;
 y++;
 as(z, -.0);

 y = 0;
 z = y;
 z++;
 as(y, 0);
 z = y;
 y++;
 ls(z, 0);
}nt();


function tt() {
 var i = 0;
 var j = 0;

 e( j < i );
 i = 0; j = 0;
 ue( j <= i );
 i = 0; j = 0;
 ue( i > j );
 i = 0; j = 0;
 ae( i >= j );
 i = 0; j = 0;
 ae( i != j );
 i = 0; j = 0;
 ae( i == i );
 i = 0; j = 0;
 a( i < j );
 i = 0; j = 0;
 a( i <= j );
 i = 0; j = 0;
 e( j > i );
 i = 0; j = 0;
 e(j >= i );
 i = 0; j = 0;
 e( j == i);
 i = 0; j = 0;
 e( i != i);

 i = 0 * 0;
 while ( i < 0 ) {
 ++i;
 }
 j = 0;

 as( j < i );
 j = 0;
 ae( j <= i );
 j = 0;
 e( i > j );
 j = 0;
 as( i >= j );
 j = 0;
 ue( i != j );
 j = 0;
 as( i == i );
 j = 0;
 e( i < j );
 j = 0;
 e( i <= j );
 j = 0;
 se( j > i );
 j = 0;
 a(j >= i );
 j = 0;
 se( j == i);
 j = 0;
 a( i != i);
 j = 0;
 e( j == j );
 j = 0;
 a( j != j );

 e( 0 > 0 );
 ae( 0 >= 0 );
 as( 0 > -0 );
 ue( -0 <= -0 );

 while ( 0 > 0 ) {
 i = i + 0;
 }

 switch(0) {
 case 0:
 e();
 case 0:
 j = 0;
 default:
 i = 0;
 case 0:
 j = 0;
 break;
 case 0:
 j = 0;
 e();
 }
 as(0, j, "00000000000000000000000000");
}


function Tg() {
 return true.ng();
}


function F() {
 return false.ng();
}


function Bt() {
 ls("0000", Tg());
 ls("0000", Tg());
 ls("0000", Tg());
 ls("00000", eT0());
 ls("00000",