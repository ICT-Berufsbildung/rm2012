<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <table border="1">
  <xsl:for-each select="test/spieler">
   <xsl:sort select="punkte" order="descending" data-type="number" />
   <tr>
   <td><xsl:value-of select="name" /></td>
   <td><xsl:value-of select="punkte" /></td>
   </tr>
  </xsl:for-each>
 </table>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>