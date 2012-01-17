<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:include href="include2.xsl" />

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <xsl:apply-templates/>
 </body>
 </html>
</xsl:template>

<xsl:template match="bild">
 <img><xsl:attribute name="src"><xsl:value-of select="." /></xsl:attribute></img>
</xsl:template>
</xsl:stylesheet>