with (parent.frames['Suche']) {
	if (zldn>zldn2) {
		hl=zld[zldn2].split("@")
		zldn2++
		laden(hl[0],hl[1],hl[2])
	}
	else {
		und=new Array()
		Suche(suche)
	}
}
