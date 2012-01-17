<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <ul>
  <xsl:apply-templates />
 </ul>
 </body>
 </html>
</xsl:template>

<xsl:template match="liste">
  <xsl:for-each select="eintrag">
   <li><xsl:value-of select="." /></li>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>