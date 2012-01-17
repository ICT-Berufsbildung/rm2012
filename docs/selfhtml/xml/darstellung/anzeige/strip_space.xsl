<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:strip-space elements="test" />

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body><pre>
  <xsl:apply-templates />
 </pre></body>
 </html>
</xsl:template>

<xsl:template match="kontakt">
  <b><xsl:value-of select="." /></b>
</xsl:template>

</xsl:stylesheet>