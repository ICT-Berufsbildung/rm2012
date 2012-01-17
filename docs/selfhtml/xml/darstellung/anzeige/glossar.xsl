<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <table border="1">
 <tr>
  <td><b>Begriff</b></td>
  <td><b>Definition</b></td>
 </tr>
 <xsl:for-each select="glossar/eintrag">
 <tr>
  <td valign="top"><xsl:value-of select="begriff" /></td>
  <td valign="top"><xsl:value-of select="definition" /></td>
 </tr>
 </xsl:for-each>
 </table>
 </body>
 </html>
 </xsl:template>

</xsl:stylesheet>