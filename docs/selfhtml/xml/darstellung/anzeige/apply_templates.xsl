<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
  <xsl:apply-templates />
 </body>
 </html>
</xsl:template>

<xsl:template match="text">
 <p style="font-family:Tahoma; font-size:18px">
 <xsl:apply-templates />
 </p>
</xsl:template>

<xsl:template match="zeit">
 <i style="color:red">
  <xsl:value-of select="." />
 </i>
</xsl:template>

</xsl:stylesheet>