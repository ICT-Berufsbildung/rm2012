<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <h1>Aphorismen</h1>
 <xsl:apply-templates />
 </body>
 </html>
</xsl:template>

<xsl:template match="p">
<xsl:copy><xsl:value-of select="." /></xsl:copy>
</xsl:template>

</xsl:stylesheet>