<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:decimal-format name="de" decimal-separator="," grouping-separator="."/>

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <xsl:apply-templates />
 </body>
 </html>
</xsl:template>

<xsl:template match="wert">
<div><xsl:value-of select="format-number(.,'#.##0,0','de')"/></div>
</xsl:template>

</xsl:stylesheet>