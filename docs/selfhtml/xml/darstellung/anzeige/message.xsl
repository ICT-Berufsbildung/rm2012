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

<xsl:template match="lottozahl">
  <xsl:variable name="aktuellerwert" select="."/>
  <xsl:if test="$aktuellerwert > 49">
   <xsl:message terminate="yes">
    <xsl:text>Die Zahl (</xsl:text>
    <xsl:value-of select="."/>
    <xsl:text>) ist zu gross!</xsl:text><br />
   </xsl:message>
  </xsl:if>
  <xsl:value-of select="."/><br />
</xsl:template>

</xsl:stylesheet>